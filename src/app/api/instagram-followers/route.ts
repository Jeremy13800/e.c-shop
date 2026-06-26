import { NextResponse } from "next/server";

/**
 * GET /api/instagram-followers
 *
 * Returns the Instagram follower count for @elloriane.camazzati.
 *
 * Priority:
 *  1. Instagram Graph API  — si INSTAGRAM_ACCESS_TOKEN + INSTAGRAM_USER_ID sont définis
 *  2. Valeur manuelle      — si INSTAGRAM_FOLLOWERS_MANUAL est défini
 *  3. Fallback hardcodé    — 1530
 *
 * Pour activer l'API officielle (compte Créateur ou Business requis) :
 *   INSTAGRAM_USER_ID=<votre_id_numérique_instagram>
 *   INSTAGRAM_ACCESS_TOKEN=<votre_long_lived_token>
 *
 * Pour une mise à jour manuelle simple :
 *   INSTAGRAM_FOLLOWERS_MANUAL=1730
 */

// Cache côté serveur : revalide toutes les 15 minutes
export const revalidate = 900;

export async function GET() {
  try {
    // ── 1. Instagram Graph API ──────────────────────────────
    const token  = process.env.INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_USER_ID;

    if (token && userId) {
      const url = `https://graph.facebook.com/v19.0/${userId}?fields=followers_count,username&access_token=${token}`;
      const res  = await fetch(url, { next: { revalidate: 900 } });

      if (res.ok) {
        const data = await res.json();
        return NextResponse.json({
          count:  data.followers_count as number,
          source: "instagram_api",
        });
      }
    }

    // ── 2. Valeur manuelle ──────────────────────────────────
    const manual = process.env.INSTAGRAM_FOLLOWERS_MANUAL;
    if (manual && !isNaN(Number(manual))) {
      return NextResponse.json({
        count:  Number(manual),
        source: "manual",
      });
    }

    // ── 3. Fallback ─────────────────────────────────────────
    return NextResponse.json({ count: 1538, source: "fallback" });

  } catch (err) {
    console.error("[instagram-followers]", err);
    return NextResponse.json({ count: 1538, source: "error" }, { status: 200 });
  }
}
