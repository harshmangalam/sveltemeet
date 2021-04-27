<script>
  import { siteData } from "$lib/config";

  import { AppBar } from "svelte-materialify";
</script>

<AppBar style="width: 100%;">
  <span slot="title">{siteData.title}</span>
  <div style="flex-grow:1" />
</AppBar>
