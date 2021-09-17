import members from "./members";

export async function main(event) {
  const member = members[event.pathParameters.id];

  if (!member) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: true }),
    };
  }

  const data = JSON.parse(event.body);

  member.content = data.content;

  return {
    statusCode: 200,
    body: JSON.stringify(member),
  };
}
