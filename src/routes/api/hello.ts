import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/hello')({
    server:{
        handlers:{
            GET: async () =>{
                console.log("hit my public api");

                return Response.json({message: "Hellooo"},
                    {
                        headers:{
                            "Cache-Control":"public, s-maxage: 60",
                            "Access-Control-Allow-Origin":"*"
                        }
                    }
                )
            }
        }
    }
})

