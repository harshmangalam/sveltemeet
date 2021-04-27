<script>
  import { siteData } from "$lib/config";

  import { Footer } from "svelte-materialify";
</script>

<Footer padless class=" justify-center flex-column" style="width:100%;">
  <div class="pa-2 text-center" style="width:100%">
    {new Date().getFullYear()}
    <b>{siteData.title}</b>
  </div>
</Footer>
