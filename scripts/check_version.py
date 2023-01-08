import sys

for i in range(1, len(sys.argv)):
    if i > 0:
        print('argument:', i, 'value:', sys.argv[i])