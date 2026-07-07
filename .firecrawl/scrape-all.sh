#!/usr/bin/env bash
set -u
BASE="https://www.change-well.com"
mkdir -p .firecrawl/pages
declare -A PAGES=(
  [your-first-visit]="/your-first-visit"
  [fees-payment]="/fees-payment"
  [services]="/therapy-and-psychological-testing-services"
  [couples-therapy]="/couples-therapy"
  [private-intensives]="/private-intensives-for-couples"
  [semi-private-retreat]="/semi-private-couples-retreat"
  [couples-workshops]="/couples-workshops"
  [coaching]="/coaching"
  [performance-coaching-pricing]="/performance-coaching-pricing"
  [contact]="/contact"
  [directions]="/contact/directions"
  [blog]="/blog"
  [resources-2]="/resources-2"
  [helplines]="/helplines"
  [terms]="/terms"
  [forms]="/forms"
  [dr-sanford]="/more-about-dr-sanford"
  [duni-porter]="/duni-porter-ms-lpc"
  [teresa-lyons]="/more-about-teresa-guillory-lyons-lcsw"
  [bridget-jaecks]="/bridget-jaecks-lpc-s-lcdc"
  [lori-wilkerson]="/meet-lori-wilkerson-lcsw"
  [kandi-stull]="/dr-kandi-stull-psy-d-lp"
  [office-staff]="/office-staff"
  [liz]="/our-staff"
  [daisy]="/daisy-pratice-manager"
  [saloni]="/saloni-clinical-assistant"
  [happiness]="/happiness"
  [gratitude]="/gratitude"
  [depression]="/depression"
  [trauma-ptsd]="/trauma-and-ptsd"
  [relationships]="/research-on-relationships"
  [adhd]="/adhd"
  [anxiety]="/anxiety-or-fears"
  [hrv]="/heart-rate-variability-biofeedback"
  [high-conflict]="/high-conflict-families"
  [parental-alienation]="/parental-alienation"
  [happiness-daily]="/happiness-in-daily-life"
)
count=0
for slug in "${!PAGES[@]}"; do
  path="${PAGES[$slug]}"
  firecrawl scrape "${BASE}${path}" --format markdown,links -o ".firecrawl/pages/${slug}.json" >/dev/null 2>&1 &
  count=$((count+1))
  if (( count % 2 == 0 )); then wait; fi
done
wait
echo "ALL SCRAPES COMPLETE: ${count} pages"
