# User guide

This library is built to make pagination thing easy.
Just add some state variables and import couple of functions and you are ready to go.

# Code samples:

# Step 1:

# Add these states

data to be shown(Can be anything, we need only array)

### const [data, setData] = useState([]);

page number (you can declare as it is)

### const [currentPageNumber, setCurrentPageNumber] = useState(1);

starting index (you can declare as it is)

### const [currentPageIndex, setCurrentPageIndex] = useState(0);

total number of data's (count of data or you can say, length of input array)


### const [totalDataCount, setTotalDataCount] = useState(0);

limit, or ending index

### const [dataPerPage, setDataPerPage] = useState(10);

# Step 2:

# While mapping through your data, pass your data array through dataFormatter():

dataFormatter(data, currentPageIndex, dataPerPage, currentPageNumber).map((post) .....

# Step 3:

# Call the Pagination component as following

```
<Pagination
currentPage={currentPageNumber}
setCurrentPage={setCurrentPageNumber}
currentPageIndex={currentPageIndex}
setCurrentPageIndex={setCurrentPageIndex}
TotalDataCount={totalDataCount}
DataPerPage={dataPerPage}
/>
```

# Contact Us Section

# Contact for bug or improvements: (nirajpandey034@gmail.com)

# Github: https://github.com/nirajpandey034/Paginator
