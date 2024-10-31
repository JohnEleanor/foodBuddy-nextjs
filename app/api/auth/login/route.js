
export async function POST(request){
    const { userId, lineId } = await request.json()
    const data = {
        userId: userId,
        lineId: lineId
    }

    return Response.json({status: "success",message : "login Success" , userInfo : data}, {status: 200})
}
