import { faker } from "@faker-js/faker";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
  const { data: session } = useSession();
  const [suggestions, setSuggestions] = useState([]);

  // code here will run once in the lifecycle of the component
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      id: i,
      name: faker.name.fullName(),
      address: faker.address.streetAddress(),
      phone: faker.phone.number(),
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      website: faker.internet.domainName(),
      dob: faker.date.birthdate(),
      company: faker.company.name(),
    }));

    // console.log("suggestions", suggestions);
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session?.user?.image} username={session?.user?.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
