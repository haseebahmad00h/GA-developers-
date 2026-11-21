import base64
from PIL import Image

def png_to_svg(png_path, svg_path, w, h):
    with open(png_path, 'rb') as f:
        data = base64.b64encode(f.read()).decode('utf-8')
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
  <image href="data:image/png;base64,{data}" width="{w}" height="{h}" />
</svg>'''
    with open(svg_path, 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print(f'Wrote {svg_path}')

# Full logo
im_full = Image.open('public/images/ga-logo-full-transparent.png')
png_to_svg('public/images/ga-logo-full-transparent.png', 'public/images/ga-logo-transparent.svg', im_full.width, im_full.height)
png_to_svg('public/images/ga-logo-full-transparent.png', 'public/images/ga-logo.svg', im_full.width, im_full.height)

# Monogram
im_mono = Image.open('public/images/ga-monogram.png')
png_to_svg('public/images/ga-monogram.png', 'public/images/ga-monogram.svg', im_mono.width, im_mono.height)
png_to_svg('public/images/ga-monogram.png', 'public/favicon.svg', im_mono.width, im_mono.height)

# Horizontal
im_horiz = Image.open('public/images/ga-logo-horizontal.png')
png_to_svg('public/images/ga-logo-horizontal.png', 'public/images/ga-logo-horizontal.svg', im_horiz.width, im_horiz.height)

# Square
im_sq = Image.open('public/images/ga-logo-square.png')
png_to_svg('public/images/ga-logo-square.png', 'public/images/ga-logo-square.svg', im_sq.width, im_sq.height)

print("All SVGs created successfully.")


# Generate Apple White/Silver SVGs
png_to_svg('public/images/ga-monogram-white.png', 'public/images/ga-monogram-white.svg', im_mono.width, im_mono.height)
png_to_svg('public/images/ga-logo-white.png', 'public/images/ga-logo-white.svg', im_full.width, im_full.height)
png_to_svg('public/images/ga-logo-horizontal-white.png', 'public/images/ga-logo-horizontal-white.svg', im_horiz.width, im_horiz.height)
png_to_svg('public/images/ga-monogram-white.png', 'public/favicon.svg', im_mono.width, im_mono.height)
print("Apple White/Silver SVGs generated successfully.")
