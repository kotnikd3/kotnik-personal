'''
author: Denis Kotnik, www.kotnikd.com
version: 1.0, december 2016
requirements: module Pillow (pip3 install Pillow)

Program puts watermarks on picture.
'''

from PIL import Image, ImageDraw, ImageFont
import sys, os

def add_watermark(input_image, text, opacity = 110, angle = 45, size = 70, margin = 200):
    '''
    Puts watermarks on picture and saves it.
    @param in_file Input picture. Optimal size is 2480 × 3508 / 300 dpi. TO DO: size = img.size[0] / 35
    @param text Watermark text.
    '''
    n_font = ImageFont.truetype("/Library/Fonts/Arial.ttf", size) # Create font.
    n_width, n_height = n_font.getsize(text)
    
    watermark = Image.new('RGBA', (n_width, n_height), (0, 0, 0, 0)) # Create image for watermark.
    draw = ImageDraw.Draw(watermark, 'RGBA') # Create ImageDraw object for drawing.
    draw.text((0, 0), text, (0, 177, 64, int(opacity)), font = n_font)
    watermark = watermark.rotate(angle, expand = 1)

    img = Image.open(input_image).convert('RGB') # Open image.
    for x in range(0 + margin, img.size[0] - n_width - margin, n_width + margin):
        for y in range(0 + margin, img.size[1] - n_height - margin, n_height + margin):
            img.paste(watermark, (x, y), mask = watermark)
    img.save("watermarked_" + input_image, 'JPEG')

if __name__ == '__main__':
    if len(sys.argv) < 3:
        sys.exit('Usage: %s [input_image] [text] [opacity = 110]' % os.path.basename(sys.argv[0]))
    add_watermark(*sys.argv[1:4])