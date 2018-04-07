export class VisionResponse {
  text?: string;
  webDetect?: Array<WebDetectionResponse>;

  constructor(text: string, webDetect: Array<WebDetectionResponse>) {
    this.text = text;
    this.webDetect = webDetect;
  }
}

export class WebDetectionResponse {
  score?: number;
  description?: string;

  constructor(score: number, description: string) {
    this.score = score;
    this.description = description;
  }
}

