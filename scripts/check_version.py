import sys

for i in range(1, len(sys.argv)):
    if i > 0:
        arr = sys.argv[i]
        for m in arr:
            print(m)
            