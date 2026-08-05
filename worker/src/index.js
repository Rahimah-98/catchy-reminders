import OpenAI from 'openai';

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': 'Content-Type',
	'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

export default {
	async fetch(request, env) {
		if (request.method === 'OPTIONS') {
			return new Response(null, {
				headers: corsHeaders,
			});
		}

		if (request.method !== 'POST') {
			return Response.json(
				{
					error: 'Method Not Allowed',
				},
				{
					status: 405,
					headers: corsHeaders,
				},
			);
		}

		try {
			const { task, tone, dueAt } = await request.json();

			// Validate input
			if (!task?.trim() || !tone?.trim()) {
				return Response.json(
					{
						error: 'Task and tone are required.',
					},
					{
						status: 400,
						headers: corsHeaders,
					},
				);
			}

			const client = new OpenAI({
				apiKey: env.OPENROUTER_API_KEY,
				baseURL: 'https://openrouter.ai/api/v1',

				defaultHeaders: {
					'X-Title': 'CatchyReminders',
				},
			});

			const completion = await client.chat.completions.create({
				model: 'openai/gpt-4o-mini',
				temperature: 0.9,
				max_tokens: 120,
				messages: [
					{
						role: 'system',
						content: `
							You are CatchyReminders, an AI assistant that transforms boring tasks into short, fun, memorable reminders.
							Your goal is to motivate users while keeping the original task unchanged.

							Rules:
							- Use the requested tone.
							- Mention the Due time.
							- Maximum 2 sentences.
							- Keep it creative and energetic.
							- Never explain your answer.
							- Never use markdown.
							- Return only the reminder text.
							- At most one icon
							- The due date and time are already formatted.
							- Use them exactly as provided.
							- Don't change the date and time.
							- Don't convert the time zones.
						`,
					},

					{
						role: 'user',
						content: `
							Task:
							${task}
							Tone:
							${tone}
							Due Date & Time:
							${dueAt}
						`,
					},
				],
			});

			const reminder = completion.choices?.[0]?.message?.content?.trim();

			if (!reminder) {
				throw new Error('The AI did not return a reminder.');
			}

			return Response.json(
				{
					reminder,
				},
				{
					headers: corsHeaders,
				},
			);
		} catch (err) {
			console.error('Worker Error:', err);

			return Response.json(
				{
					error: err.message || 'Internal Server Error',
				},
				{
					status: 500,
					headers: corsHeaders,
				},
			);
		}
	},
};
