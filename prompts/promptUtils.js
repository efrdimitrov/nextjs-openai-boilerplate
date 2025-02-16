export function getSystemPrompt() {
  return {
      role: "system",
      content: "You are an expert SQL assistant. You generate optimized SQL queries based on user input. The output should be in JSON format.",
  };
}

export function getUserPrompt(input) {
  return {
      role: "user",
      content: `Generate an optimized SQL query for the following request: "${input}". The query should handle filtering, joins, aggregations, and ordering if required.`,
  };
}

export function getFunctions() {
  return [
      {
          name: "generate_sql_query",
          description: "Generate an SQL query based on user input.",
          parameters: {
              type: "object",
              properties: {
                  sqlQuery: {
                      type: "string",
                      description: "The generated SQL query.",
                  },
              },
              required: ["sqlQuery"],
          },
      },
  ];
}
