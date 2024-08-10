import  imageUrlBuilder  from "@sanity/image-url";
import { createClient } from "@sanity/client";

export const client= createClient({
    projectId: 'srq55yft',
     dataset:'production',
     useCdn:true,
     apiVersion:"2014-08-10",
     token:process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder= imageUrlBuilder(client)

export const urlFor = (source)=>{
    return builder.image(source).url()
}