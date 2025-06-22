import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://leejccnwdmgpzqcpajda.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

document
  .getElementById("deleteForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;

    const { data, error } = await supabase
      .from("email_delete_requests")
      .insert([{ email_address: email }])
      .select();

    if (data) {
      document.getElementById("confirmation").style.display = "block";
      document.getElementById("deleteForm").style.display = "none";
    }
  });
