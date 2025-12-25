# SPACING ADJUSTMENTS - Implementation Plan

## Client Feedback: "There are still some spacing adjustments to be done on some of the pages"

### Issues Identified from Browser Review:

## 1. **CRITICAL: Hero Text Visibility** (ALL PAGES)
- **Problem:** Hero headings exist in DOM but not visible
- **Impact:** Creates excessive empty space at top of pages
- **Fix:** Verify h1 color/visibility in hero sections

## 2. **Section Padding Standardization**
- **Current:** Inconsistent spacing between sections
- **Target:** Unified `py-24` (96px) for all major sections
- **Pages Affected:** All

## 3. **Grid Gaps**
### Services Page:
- Capabilities grid: Vertical gap > horizontal gap (uneven)
- **Fix:** Use consistent `gap-8` for both directions

### Technology Page:
- Domains grid: Cards too close vertically
- **Fix:** Increase vertical gap to `gap-y-10`

### Homepage:
- Academy cards: Too close horizontally
- **Fix:** Increase horizontal gap to `gap-x-8`

## 4. **Specific Page Issues:**

### Homepage:
- [ ] Hero to Services transition: Reduce padding
- [ ] Services grid: Add more top margin (`mt-12`)
- [ ] Academy cards: Increase horizontal spacing

### Services Page:
- [ ] Hero section: Fix text visibility
- [ ] Capabilities grid: Balance vertical/horizontal gaps
- [ ] Feature blocks: Center-align text with images
- [ ] Subheaders ("Capabilities", "Ideal For"): Add `mt-6`

### Technology Page:
- [ ] Hero to Philosophy: Reduce massive gap
- [ ] Philosophy list: Increase container width
- [ ] Domains grid: Increase vertical spacing

### Academy Page:
- [ ] Hero to Philosophy: Reduce "dead zone"
- [ ] Section transitions: Standardize gaps
- [ ] Learning Pathways to Programs: Reduce large margin

### About Page:
- [ ] Story sections: Reduce excessive gaps
- [ ] "What We Stand For" header: Closer to cards (`mb-12`)
- [ ] Narrative flow: More cohesive spacing

### Contact Page:
- [ ] Hero section: Fix text visibility
- [ ] Inquiry buttons to form: Reduce gap
- [ ] Overall container: Bring closer to hero

## Implementation Priority:

### Phase 1: CRITICAL (Do First)
1. Verify hero text visibility across all pages
2. Standardize section padding to `py-24`

### Phase 2: GRID ADJUSTMENTS
1. Fix Services capabilities grid
2. Fix Technology domains grid
3. Fix Homepage academy cards

### Phase 3: FINE-TUNING
1. Adjust section transitions
2. Center-align feature blocks
3. Add spacing to subheaders

## CSS Variables to Add:
```css
/* Standardized Section Spacing */
.section-standard {
  padding-top: 6rem;    /* 96px */
  padding-bottom: 6rem; /* 96px */
}

.section-hero {
  padding-top: 8rem;    /* 128px */
  padding-bottom: 8rem; /* 128px */
}

.section-compact {
  padding-top: 4rem;    /* 64px */
  padding-bottom: 4rem; /* 64px */
}
```

## Testing Checklist:
- [ ] Homepage spacing verified
- [ ] Services page spacing verified
- [ ] Technology page spacing verified
- [ ] Academy page spacing verified
- [ ] About page spacing verified
- [ ] Contact page spacing verified
- [ ] Mobile responsive spacing checked
- [ ] Tablet responsive spacing checked
