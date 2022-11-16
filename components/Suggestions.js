import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
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
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="h-10 w-10 rounded-full border p-[2px]"
            src={profile.avatar}
            alt={`${profile.username} profile image`}
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">Works at {profile.company}</h3>
          </div>
          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
