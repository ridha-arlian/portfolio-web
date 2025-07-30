export type TimelineItemType = {
  id: number
  role: string
  company: string
  period: string
  location: string
  type: string
  logo?: string
  skills: string[]
}

export const timelineData: TimelineItemType[] = [
  {
    id: 1,
    company: "Company A",
    role: "Software Engineer",
    period: "2020 - 2022",
    location: "New York, NY",
    type: "Full-time",
    logo: "/placeholder.svg?height=48&width=48",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    company: "Company B",
    role: "Frontend Developer",
    period: "2022 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    logo: "/placeholder.svg?height=48&width=48",
    skills: ["React", "Next.js", "Chakra UI"],
  },
  {
    id: 3,
    company: "Company C",
    role: "Frontend Developer",
    period: "2022 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    logo: "/placeholder.svg?height=48&width=48",
    skills: ["React", "Next.js", "Chakra UI"],
  },
  {
    id: 4,
    company: "Company D",
    role: "Frontend Developer",
    period: "2022 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    logo: "/placeholder.svg?height=48&width=48",
    skills: ["React", "Next.js", "Chakra UI"],
  },
]