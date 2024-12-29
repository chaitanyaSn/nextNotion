"use server"

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

export async function createNewDocument(){
    const { userId, sessionClaims } = await auth();

    if (!userId) {
        redirect("/sign-in");
        return;
    }


    const docCollectionRef=adminDb.collection("documents")
    const docRef=await docCollectionRef.add({
        title:"New Doc"
    })

    await adminDb.collection('users').doc(sessionClaims?.email!).collection('room').doc(docRef.id).set({
        userId:sessionClaims?.email!,
        role:"owner",
        createrdAt:new Date(),
        roomId:docRef.id,
    })
return {docId:docRef.id}

}