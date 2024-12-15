import Link from "next/link";
import { getCourses,getSchedules } from "@/data/loaders";
import ReactMarkdown from "react-markdown";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LinkCardProps {
    documentId: string;
    
    name: string;
    live: string;
    class_time: Date;
    description: { type: string; children: { type: string; text: string }[] }[];
   
  }
  
  function LinkCard({
    documentId,
    name,
    live,
    class_time,
    description,
    
  }: Readonly<LinkCardProps>) {
    return (
  
        <Card className="relative hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="bg-gray-100 p-4 rounded-t-md">
            <CardTitle className="leading-8 text-pink-500 text-xl font-semibold">
              {name || "Course"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            {/* Duration and Fee */}
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>live class link:</strong> <a href={live} target="_blank">click here</a></p>
              
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              {/* <p><strong>live:</strong> {class_time.toDateString()} </p> */}
              
            </div>
            {/* Topics List */}
            <div>
              <strong className="block mb-2 text-gray-700">Topics Covered:</strong>
              <ul className="list-disc pl-5 text-gray-600 text-sm">
                {description.map((detail, index) =>
                  detail.children.map((child, childIndex) => (
                    <li key={`${index}-${childIndex}`}>{child.text}</li>
                  ))
                )}
              </ul>
            </div>
          </CardContent>
        </Card>
      
    );
  }

interface SearchParamsProps {
  searchParams?: {
    page?: string;
    query?: string;
  };
}


export default async function SummariesRoute({ searchParams }: SearchParamsProps) {
  const search = await searchParams;
  const query = search?.query ?? ""; 
//   const currentPage = Number(search?.page) || 1;

  const { data, meta } = await getSchedules();
  const pageCount = meta?.pagination?.pageCount;

  console.log(data);  

  if (!data) return null;
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {/* <Search /> */}
      <div className="grid grid-cols-1 
      
      gap-4">
        {data.map((item: LinkCardProps) => (
          <LinkCard key={item.documentId} {...item} />
        ))}
      </div>
      {/* <PaginationComponent pageCount={pageCount} /> */}
    </div>
  );
}