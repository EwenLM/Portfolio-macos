/**
 * Application configuration (Spotify, Resume, etc.)
 */

import type { SpotifyConfig, ResumeConfig } from '../types';

export const spotify: SpotifyConfig = {
  playlistId: '2TQS5CCpfODqVxuwPchYyq?si=d646bd9426a04600',
  playlistName: 'My Recommandations',
};

export const resume: ResumeConfig = {
  url: 'https://drive.google.com/file/d/1ZyaeXLpdOtPUygFCu55yYCQSEdW3K4pm/view',
  localPath: '/resume.pdf',
};
