import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Mayowa",
    location:"Cross River State, Nigeria",
    body: "Mayokun looks forward to every class with her tutors. I will say she is now more confident in reading big grammars, 100% in English, and 80% in math.",
  },
  {
    name: "Fikayo",
    location: "Lagos State, Nigeria",
    body: "I would say there's been a 50% improvement for both English and math, and the teachers are really great. Their patience with Fikayo's excesses is commendable. I appreciate them.",
  },
  {
    name: "Alexandra",
    location: "Lagos State, Nigeria",
    body: "Alexandra used to struggle with Mathematics, but after a few sessions with her GoLearn tutor. We have seen a great improvement in her performance in Mathematics.",
  },
  {
    name: "Frederick",
    location: "Cross River State, Nigeria",
    body: "It's been very help to my child's school. It made learning interesting, something she always look forward to; and most importantly the illustrations make her learn faster and understand deeper.",
  },
  {
    name: "Jenny",
    location: "Cross River State, Nigeria",
    body: "The GoLearn app is child friendly and very relatable. My child has greatly improved in science because of the app.",
  },
  {
    name: "Charles",
    location: "Anambra State, Nigeria",
    body: "My daughter that is preparing for common entrance has been using the GoLearn app and she testified that her teacher told her that she really improved.",
  },
];

const firstRow = reviews;

const ReviewCard = ({
  name,
  location,
  body,
}: {
  name: string;
  location: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        <p>{location}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-4/5 flex-col items-center justify-center overflow-hidden rounded-lg bg-background  ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
