import sys
import json
for i in range(1, len(sys.argv)):
    if i > 0:
        arr = sys.argv[i]
        tolist = json.load(arr, 'cls')
        print(tolist)
        # for e in tolist:
        #     print(e)
            