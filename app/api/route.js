export async function GET(){
    console.log("GET")
    return Response.json({message: "GET"})
}

export async function POST(){
    console.log("POST")
    return Response.json({message: "POST"})
}