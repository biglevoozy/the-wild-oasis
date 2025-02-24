import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://plmjqjjdsnnqygqzbrbe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsbWpxampkc25ucXlncXpicmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1ODgwNDUsImV4cCI6MjA1NDE2NDA0NX0.ydZCoN1G0DDzBuzQgwjVOywnZxlg1xZ4uztkIJjJtHk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
