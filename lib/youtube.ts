/** Pulls the video ID out of youtube.com/watch?v=…, youtu.be/…, or a bare ID. Safe on server and client. */
export function youtubeId(url: string): string | null {
  if (/^[\w-]{11}$/.test(url)) return url;
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return m ? m[1] : null;
}
