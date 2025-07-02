'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createInvitation(formData: FormData) {
  const reception_time = `${formData.get('date')}T${formData.get('reception_time')}`
  const ceremony_time = `${formData.get('date')}T${formData.get('ceremony_time')}`
  console.log({reception_time,ceremony_time})
  const data = {
    name1: formData.get('name1') as string,
    name2: formData.get('name2') as string,
    date: new Date(formData.get('date') as string),
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    social_media: formData.get('social_media') as string,
    description: formData.get('description') as string,
    reception_time,
    ceremony_time,
    venue_name: formData.get('venue_name') as string,
    venue_address: formData.get('venue_address') as string,
    venue_coordinates: formData.get('venue_coordinates') as string,
    template: "modern-minimalist"
  }

  const invitation = await db.invitation.create({ data })
  revalidatePath(`/templates/t/${invitation.id}`)
  redirect(`/templates/t/${invitation.id}`)
}
