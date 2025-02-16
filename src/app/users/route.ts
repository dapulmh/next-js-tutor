export const users = [
    {id: 1, name: "John doe"}
]
export async function GET() {
    return Response.json(users);
}

export async function POST( request : Request) {
    const user = await request.json()
    const newUser = {
        id : users.length + 1, name : user.name   
     }
     users.push(newUser);

     return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Tye" : "application/json",
        },
        status: 201
     });
}