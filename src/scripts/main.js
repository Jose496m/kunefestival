fetch("https://lqsydolvzgwrecxfbwmp.supabase.co/rest/v1/kune?", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxxc3lkb2x2emd3cmVjeGZid21wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3OTU1NDAsImV4cCI6MTk5NDM3MTU0MH0.8FosJWKvJueQg96G9INSXixKRgxb9UXEYfhFbYWOSGU",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
  // items.forEach()
}
//function(){}
