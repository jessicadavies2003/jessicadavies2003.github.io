from os import listdir, path
from sys import argv

def file2tag(filename: str, width: str = "50%"):
    template = f"<img class='imgs' src='promo-material/{filename}' alt='Sketches of the cast' width='{width}'>"
    return template

def dir2tags(filepath: str, width: str = "30%"):
    tags = []
    for file_name in listdir(filepath):
        template = f"<img class='imgs' src='promo-material/{filepath.split("/")[-1]}/{file_name}' alt='Sketches of the cast' width='{width}'>"
        tags.append(template)
    
    return "\n".join(tags)

current_dir = path.dirname(path.abspath(argv[0])).replace("\\", "/")

filename = "colin-n-jacob-sketches.jpg"
try:
    print(file2tag(filename))
except Exception as e:
    print(e)
input()

# try:
#     print(dir2tags(f"{current_dir}/sketches-4-august"))
# except Exception as e:
#     print(e)
# input()