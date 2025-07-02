import { createInvitation } from "@/actions/create-invitation";

export default function CreatePage() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Create Your Invitation</h1>
      <form action={createInvitation} className="space-y-4">
        <div>
          <label>Name 1</label>
          <input type="text" name="name1" required className="input" />
        </div>
        <div>
          <label>Name 2</label>
          <input type="text" name="name2" required className="input" />
        </div>
        <div>
          <label>Date</label>
          <input type="date" name="date" required className="input" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" required className="input" />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" name="phone" required className="input" />
        </div>
        <div>
          <label>Social Media Link</label>
          <input type="text" name="social_media" className="input" />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" className="input" rows={4} />
        </div>
        <div>
          <label>Reception Time</label>
          <input type="time" name="reception_time" className="input" />
        </div>
        <div>
          <label>Ceremony Time</label>
          <input type="time" name="ceremony_time" className="input" />
        </div>
        <div>
          <label>Venue Name</label>
          <input type="text" name="venue_name" className="input" />
        </div>
        <div>
          <label>Venue Address</label>
          <input type="text" name="venue_address" className="input" />
        </div>
        <div>
          <label>Venue Coordinates (lat,lon)</label>
          <input type="text" name="venue_coordinates" className="input" />
        </div>

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
