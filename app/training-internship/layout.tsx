import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Software Engineering Training & Certified Internships in Cameroon',
  description: 'Kickstart your tech career at Nexora Academy. Join practical software engineering training courses in Cameroon with guaranteed certified internship options.',
  keywords: 'software training, coding academy, tech internship, learn web development, mobile app course, Cameroon software training, Nexora Academy, learn tech skills Buea, internship in Buea, software engineering training in Buea',
  alternates: {
    canonical: 'https://nexoraempire.com/training-internship',
  },
};

export default function TrainingInternshipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
