import members from "./members";

export async function main(event) {
  const member = members[event.pathParameters.id];
  return member
    ? {
        statusCode: 200,
        body: JSON.stringify(member),
      }
    : {
        statusCode: 404,
        body: JSON.stringify({ error: true }),
      };
}
