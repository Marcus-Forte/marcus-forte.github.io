export interface Education {
  period: string;
  institution: string;
  degree: string;
  course: string;
}

export interface Project<TSkillId extends string = string> {
  id: string;
  company: string;
  logo?: string;
  title: string;
  period: string;
  role: string;
  description: string;
  skills: TSkillId[];
  images?: string[];
  gifUrl?: string;
  videoEmbedUrl?: string;
}

export interface PersonalProject<TSkillId extends string = string> {
  id: string;
  title: string;
  description: string;
  skills: TSkillId[];
  images?: string[];
  gif?: string;
  video?: string;
}

export type ProficiencyLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type SkillKind = "Design" | "Technology" | "People" | "Technique";

export interface Language {
  name: string;
  level: ProficiencyLevel;
}

export interface Skill {
  id: string;
  name: string;
  level: ProficiencyLevel;
  kind: SkillKind;
}
export type Milestone = string;

export interface CurriculumVitae<TSkillId extends string = string> {
  about: string;
  skillsSummary: string;
  educations: Education[];
  projects: Project<TSkillId>[];
  personalProjects: PersonalProject<TSkillId>[];
  languages: Language[];
  skills: readonly Skill[];
  qualifications: string[];
  milestones: Milestone[];
}
