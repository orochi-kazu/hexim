<script>
  import { locales, setLocale } from '$lib/paraglide/runtime'
  import { m as text } from '$lib/paraglide/messages'
  import { settings } from '$lib/deps'

  const selectLocale = (event) => {
    if (!event) return

    const chosen = event.target.value
    settings.locale.override = chosen
    setLocale(chosen)
  }
</script>

<div>
  <span>
    <fieldset style="display: inline-block;" onchange={selectLocale}>
      {#each locales as lang}
        <input
          type="radio"
          id={lang}
          name="localeOverride"
          value={lang}
          checked={lang === settings.locale.override}
        />
        <label for={lang}>{lang}</label>
      {/each}
    </fieldset>
  </span>
</div>
