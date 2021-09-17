import members from "./members";

export async function main() {
  return {
    statusCode: 200,
    body: JSON.stringify(members, null, "  "),
  };
}
