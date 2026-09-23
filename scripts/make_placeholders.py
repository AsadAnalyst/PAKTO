"""Generates neutral placeholder JPGs in public/images. Safe to re-run; replace the output with real assets."""
import os, random
from PIL import Image, ImageDraw, ImageFilter, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images")
KRAFT, CREAM, INK, BLUE = (196, 160, 118), (236, 232, 222), (36, 38, 44), (43, 60, 232)
SIZES = {"hero-packaging": (1920, 1080), "custom-box": (1000, 1250), "mailer-box": (1000, 1250), "shipping-box": (1000, 1250),
         "gift-box": (1000, 1250), "cosmetic-box": (1000, 1250), "food-box": (1000, 1250),
         "gallery-1": (1200, 1500), "gallery-2": (1400, 1050), "gallery-3": (1200, 1200), "gallery-4": (1050, 1400), "gallery-5": (1600, 1200)}
PAL = {"custom-box": CREAM, "mailer-box": KRAFT, "shipping-box": KRAFT, "gift-box": CREAM, "cosmetic-box": CREAM, "food-box": KRAFT,
       "hero-packaging": KRAFT, "gallery-1": INK, "gallery-2": KRAFT, "gallery-3": KRAFT, "gallery-4": CREAM, "gallery-5": INK}

def shade(c, f): return tuple(max(0, min(255, int(v * f))) for v in c)

def box(d, cx, cy, w, dp, h, c):
    F, L, R, B = (cx, cy + dp), (cx - w, cy), (cx + w, cy), (cx, cy - dp)
    up = lambda p: (p[0], p[1] - h)
    d.polygon([L, F, up(F), up(L)], fill=shade(c, .82))
    d.polygon([F, R, up(R), up(F)], fill=shade(c, .66))
    d.polygon([up(L), up(F), up(R), up(B)], fill=shade(c, 1.06))
    d.line([up(L), up(F), up(R)], fill=shade(c, 1.2), width=3)
    d.line([up(F), F], fill=shade(c, .5), width=2)

def make(name, size):
    W, H = size; rnd = random.Random(name)
    bg = Image.new("RGB", size)
    px = ImageDraw.Draw(bg)
    for y in range(H):  # soft studio gradient
        t = y / H; px.line([(0, y), (W, y)], fill=(int(222 - 40 * t), int(222 - 42 * t), int(219 - 40 * t)))
    if PAL[name] == INK:
        bg = Image.new("RGB", size, (28, 30, 35)); px = ImageDraw.Draw(bg)
    shadow = Image.new("RGBA", size, (0, 0, 0, 0)); sd = ImageDraw.Draw(shadow)
    layer = Image.new("RGBA", size, (0, 0, 0, 0)); d = ImageDraw.Draw(layer)
    s = min(W, H) / 1000
    base = PAL[name]; palette = [base, shade(base, .9), CREAM if base != CREAM else KRAFT, BLUE]
    n = 5 if name.startswith(("hero", "gallery-2", "gallery-5")) else 3 if name.startswith("gallery") else 2
    for i in range(n):
        w, dp, h = int(rnd.randint(150, 250) * s), int(rnd.randint(80, 130) * s), int(rnd.randint(110, 260) * s)
        cx = int(W * (0.5 if n == 2 and i == 0 else rnd.uniform(.22, .78))) if n > 2 else int(W * (.4 + .22 * i))
        cy = int(H * rnd.uniform(.58, .74))
        sd.ellipse([cx - w * 1.3, cy + dp * .3, cx + w * 1.3, cy + dp * 1.5], fill=(0, 0, 0, 90))
        box(d, cx, cy, w, dp, h, palette[i % 4] if i else base)
    shadow = shadow.filter(ImageFilter.GaussianBlur(28 * s))
    out = Image.alpha_composite(Image.alpha_composite(bg.convert("RGBA"), shadow), layer).convert("RGB")
    dr = ImageDraw.Draw(out)
    try: f = ImageFont.truetype("DejaVuSans.ttf", max(18, int(22 * s)))
    except OSError: f = ImageFont.load_default()
    dr.text((int(36 * s), H - int(60 * s)), f"PLACEHOLDER  {name}.jpg", fill=(150, 150, 150) if PAL[name] != INK else (110, 112, 120), font=f)
    out.save(os.path.join(OUT, f"{name}.jpg"), quality=86)

for k, v in SIZES.items(): make(k, v)
print("Generated", len(SIZES), "placeholders")
