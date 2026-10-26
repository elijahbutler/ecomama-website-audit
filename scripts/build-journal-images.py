"""Create responsive archive derivatives. Requires ImageMagick's magick command."""
from pathlib import Path
import re
import subprocess

root = Path(__file__).resolve().parent.parent
sources = [root / 'src/data/fieldJournal.ts', root / 'src/pages/JournalPages.tsx', root / 'src/data/siteContent.ts']
filenames = set()
for source in sources:
    filenames.update(re.findall(r'''['"](?:/images/)?([0-9]{2}-[^'"]+\.(?:jpg|jpeg|png))['"]''', source.read_text()))
output = root / 'public/images/journal'
output.mkdir(exist_ok=True)
for filename in sorted(filenames):
    original = root / 'public/images' / filename
    for width in [480, 960, 1600]:
        destination = output / f'{original.stem}-{width}.webp'
        if destination.exists():
            continue
        subprocess.run(['magick', str(original), '-auto-orient', '-resize', f'{width}x>', '-quality', '82', str(destination)], check=True)
print(f'Generated {len(filenames) * 3} responsive images from {len(filenames)} archive originals.')
