export enum ReadingStatus {
  WANT_TO_READ = "wantToRead", // 읽고 싶은 책
  READING = "reading",         // 읽는 중
  READ = "read",               // 읽음
  ON_HOLD = "onHold"           // 보류중
}

export const READING_STATUS_LABELS = {
  [ReadingStatus.WANT_TO_READ]: "읽고 싶은 책",
  [ReadingStatus.READING]: "읽는 중",
  [ReadingStatus.READ]: "읽음",
  [ReadingStatus.ON_HOLD]: "보류 중"
} as const; 