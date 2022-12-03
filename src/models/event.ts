import { Speaker } from "./speaker";

export class Event {
  title: string;
  speakers: Speaker[];
  description: string;
  track: string;
  isActive: boolean;

  constructor(
    title: string,
    speakers: Speaker[],
    description: string,
    track: string,
    isActive: boolean
  ) {
    this.title = title;
    this.speakers = speakers;
    this.description = description;
    this.track = track;
    this.isActive = isActive;
  }
}
