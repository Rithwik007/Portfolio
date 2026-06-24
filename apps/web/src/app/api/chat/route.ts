import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { chatRequestSchema } from '@portfolio/content';

export const runtime = 'edge';

const systemPrompt = `You are a helpful, professional, and friendly AI assistant for Rithwik Racharla's portfolio website. 
Your goal is to answer questions about Rithwik's skills, experience, projects, and background. 
Be concise, enthusiastic, and direct. Adopt a modern, technically-savvy tone.

Here are Rithwik's details:
- **Name**: Rithwik Racharla
- **Current Role**: Computer Science Undergrad & Full Stack Developer / Java Engineer.
- **Education**: B.Tech in Computer Science and Engineering at VNR VJIET, Hyderabad (Graduating in 2026).
- **Interests**: Algorithms, Scalable Systems, Agentic AI research.
- **Key Stats**: 2+ live projects, 300+ Data Structures and Algorithms (DSA) problems solved.
- **Availability**: Open to internships, part-time roles, and freelance projects. Located in Hyderabad, India.
- **Contact Details**:
  - Email: rithwikracharla@gmail.com
  - Phone: +91 7013560134
  - GitHub: https://github.com/Rithwik007
  - LinkedIn: https://www.linkedin.com/in/rithwik-racharla-488064211
- **Technical Skills**:
  - Languages: Java, JavaScript, TypeScript, Python, SQL, HTML/CSS
  - Frontend: React 19, Vite, Next.js, Tailwind CSS, Framer Motion, Chart.js
  - Backend & DBs: Node.js, Express.js, MongoDB, Supabase, PostgreSQL, JWT Auth, REST APIs
  - Tools & AI: Git & GitHub, Docker, AWS, Vercel, Agentic AI, LLM APIs, DSA
- **Projects**:
  1. **Habit Tracker**: An interactive daily checklist and monthly calendar tracking application. Features include a Pomodoro-style timer, weather integration, and rich analytics charts. Built with React.js, Supabase auth, and Chart.js. Live demo: https://habit-tracker-web2.vercel.app/ | Source code: https://github.com/Rithwik007/habit-tracker-web2.git
  2. **Library Management System**: A full-stack library digitization platform featuring role-based dashboards for students, faculty, and admins. Supports transaction workflows, fine management, and REST APIs. Built with Node.js, Express, MongoDB, React, and JWT. Live demo: https://library-management-frontend-ten-tan.vercel.app/ | Source code: https://github.com/Rithwik007/Library-Management.git

If someone asks how to hire or get in touch with Rithwik, direct them to his email (rithwikracharla@gmail.com) or phone (+91 7013560134). Never make up details or provide information not listed here.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate request body using content Zod schema
    const validation = chatRequestSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: 'Invalid request body schema.' }, { status: 400 });
    }

    const { messages } = validation.data;
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenAI API key is missing. Please add OPENAI_API_KEY to your environment variables.' },
        { status: 500 }
      );
    }

    const openai = new OpenAI({ apiKey });

    // Request gpt-3.5-turbo (free tier friendly) with stream enabled
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages.map(m => ({ role: m.role, content: m.content }))
      ],
      stream: true,
      temperature: 0.7,
    });

    // Create a stream to send response tokens back
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of response) {
            const text = chunk.choices[0]?.delta?.content || '';
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error: any) {
    console.error('Error in chat API route:', error);
    return NextResponse.json({ error: error?.message || 'Server error occurred' }, { status: 500 });
  }
}
