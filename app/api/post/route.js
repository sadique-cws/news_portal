import Post from '@/models/Post'
import { NextResponse } from 'next/server'

export function GET(request){
    return NextResponse.json({"hello":"testsing"})
}