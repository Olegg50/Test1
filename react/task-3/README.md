### Description

Implement your own component of modal window

### Requirements:

1. Component should have the following API:
2. Modal should be positioned absolutely above all other elements on the page

```
// [] -> Default Value

const [isOpen, setIsOpen] = useState(false)

{isOpen && (
    <MyModal
        isLoading={true} // not required [false] - display loading indicator instead of content
        isSaving={true} // not required [false] - display loading indicator instead of submit button
        showBackDrop={false} // not required [true] 
        contentWidth={600} // not required [500]
        title="Hello"
        subTitle="Hello world" // not required (if not provided - do not render subtitle)
        submitBtnLabel="Submit" // not required [Save]
        cancelBtnLabel="Decline" // not required [Cancel]
        onCrossBtnClick={() => alert('close')} // not required [] -> if not provided - hide cross button
        onSubmitBtnClick={() => alert('submit')} // not required [] -> if not provided - hide submit button
        onCancelBtnClick={() => alert('cancel')} // not required [] -> if not provided - hide cancel button
    >
        I'm the content
    </MyModal>  
)}  
```

### Addition Points:

1. Beautiful and responsive UI
2. Animations
3. scss or scss modules
