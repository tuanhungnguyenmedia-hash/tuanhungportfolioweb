import os
import sys
from PIL import Image

TARGET_DIRS = [
    "/Users/hungtuan/Downloads/tuan hung 2026/portfolio",
    "/Users/hungtuan/VeliaManaApp",
    "/Users/hungtuan/v0-modern-gen-z-energy-drink-landi"
]

EXCLUDE_DIRS = {"node_modules", ".next", ".git", ".cache"}
EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp"}

def compress_image(file_path):
    orig_size = os.path.getsize(file_path)
    print(f"\n[COMPRESSING] {file_path}")
    print(f"  Original size: {orig_size / (1024*1024):.2f} MB")
    
    ext = os.path.splitext(file_path)[1].lower()
    
    # Open image
    try:
        with Image.open(file_path) as img:
            # Determine format
            fmt = img.format
            if not fmt:
                if ext in ['.jpg', '.jpeg']:
                    fmt = 'JPEG'
                elif ext == '.png':
                    fmt = 'PNG'
                elif ext == '.webp':
                    fmt = 'WEBP'
                else:
                    fmt = 'JPEG'
            
            quality = 85
            scale_factor = 1.0
            temp_path = file_path + ".tmp"
            
            while True:
                # Resize if scale_factor < 1.0
                if scale_factor < 1.0:
                    new_size = (int(img.width * scale_factor), int(img.height * scale_factor))
                    if new_size[0] == 0 or new_size[1] == 0:
                        break
                    resized_img = img.resize(new_size, Image.Resampling.LANCZOS)
                else:
                    resized_img = img
                
                # Save to temp file
                try:
                    if fmt == 'JPEG':
                        resized_img.save(temp_path, format=fmt, quality=quality, optimize=True)
                    elif fmt == 'WEBP':
                        resized_img.save(temp_path, format=fmt, quality=quality)www
                    elif fmt == 'PNG':
                        resized_img.save(temp_path, format=fmt, optimize=True, compress_level=9)
                    else:
                        resized_img.save(temp_path, format=fmt)
                except Exception as e:
                    # Handle transparency mode mismatch when saving as JPEG
                    if resized_img.mode in ('RGBA', 'LA') and fmt == 'JPEG':
                        rgb_img = resized_img.convert('RGB')
                        rgb_img.save(temp_path, format=fmt, quality=quality, optimize=True)
                    else:
                        raise e
                
                # Check size of the temporary compressed file
                tmp_size = os.path.getsize(temp_path)
                if tmp_size < 5 * 1024 * 1024: # Less than 5MB
                    # Replace original file
                    os.replace(temp_path, file_path)
                    print(f"  -> Compressed to {tmp_size / (1024*1024):.2f} MB (Reduced by {(orig_size - tmp_size) / (1024*1024):.2f} MB)")
                    break
                
                # Adjust compression parameters
                if fmt in ('JPEG', 'WEBP') and quality > 50:
                    quality -= 10
                else:
                    # Progressively downscale by 20%
                    scale_factor *= 0.8
                    quality = 80 # Reset quality for resized image
                
                # Safeguard to prevent infinite loops
                if scale_factor < 0.1:
                    print(f"  [WARNING] Could not compress {file_path} under 5MB without severe quality loss.")
                    if os.path.exists(temp_path):
                        os.remove(temp_path)
                    break
    except Exception as e:
        print(f"  [ERROR] Failed to compress {file_path}: {e}")

def main():
    print("Starting Proactive Image Compression (Target: Under 5MB)")
    large_files = []
    
    # 1. Scan target directories for files > 5MB
    for target_dir in TARGET_DIRS:
        if not os.path.exists(target_dir):
            print(f"\nSkipping non-existent directory: {target_dir}")
            continue
            
        print(f"\nScanning directory: {target_dir}")
        for root, dirs, files in os.walk(target_dir):
            # Prune excluded directories in-place
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
            
            for file in files:
                ext = os.path.splitext(file)[1].lower()
                if ext in EXTENSIONS:
                    file_path = os.path.join(root, file)
                    try:
                        size = os.path.getsize(file_path)
                        if size > 5 * 1024 * 1024: # 5MB
                            large_files.append((file_path, size))
                    except Exception as e:
                        pass
                        
    if not large_files:
        print("\nNo image files larger than 5MB were found.")
        return
        
    print(f"\nFound {len(large_files)} image(s) larger than 5MB.")
    
    # 2. Compress each file
    for file_path, size in large_files:
        compress_image(file_path)
        
    print("\nCompression complete!")

if __name__ == "__main__":
    main()
