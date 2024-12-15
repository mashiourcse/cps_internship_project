import { getCodeforcesInfo, getUsersNameCodeforces } from "@/data/loaders";

interface User {
  username: string;
  codeforces: string;
  maxRating?: number; 
}

export default async function UserTablePage(): Promise<JSX.Element> {

  const users: User[] = await getUsersNameCodeforces();

  function getTitleByRating(rating: number ): string {
    if (rating >= 4000) return "Tourist";
    if (rating >= 3000) return "Legendary Grandmaster";
    if (rating >= 2600) return "International Grandmaster";
    if (rating >= 2400) return "Grandmaster";
    if (rating >= 2300) return "International Master";
    if (rating >= 2100) return "Master";
    if (rating >= 1900) return "Candidate Master";
    if (rating >= 1600) return "Expert";
    if (rating >= 1400) return "Specialist";
    if (rating >= 1200) return "Pupil";
    return "Newbie";
  }
 
  const usersWithMaxRating = await Promise.all(
    users
      .filter((user) => user.codeforces !== null) 
      .map(async (user) => {
        const maxRating = await getCodeforcesInfo(user.codeforces); 
        return { ...user, maxRating }; 
      })
  );

  const sortedUsers = usersWithMaxRating.sort((a, b) => (b.maxRating ?? 0) - (a.maxRating ?? 0));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Codeforces Leaderboard</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">SL</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Username</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Codeforces</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Max Rating</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href={`https://codeforces.com/profile/${user.codeforces}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {user.codeforces}
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  { (user.maxRating!==null)? getTitleByRating(user.maxRating) : "Unrated"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.maxRating ?? "Not Available"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
