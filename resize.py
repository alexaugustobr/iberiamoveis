import os
import tinify
tinify.key = ""

paths = [
    'D:\\git\\iberiamoveis\\projetos\\salas'
]

#

files = []
# r=root, d=directories, f = files
for path in paths:
    for r, d, f in os.walk(path):
        for file in f:
            print(os.path.join(r, file))
            files.append(os.path.join(r, file))

for f in files:
    source = tinify.from_file(f)
    bsize = os.path.getsize(f)
    source.to_file(f)
    asize = os.path.getsize(f)
    print(f, '\tb:', bsize, '\ta:', asize)

