export async function GET(request, {params}){
    const { userId } = await params
    return Response.json({message: "GET", id: userId})
}