import sys
import json
for i in range(1, len(sys.argv)):
    if i > 0:
        arr = sys.argv[i]
        tolist = json.loads(arr)
        for e in tolist:
            print(e)
            