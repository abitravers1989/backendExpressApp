describe('UserService', () => {
    let testDatabase = mongoStubb;
    beforeEach(() => {
        createUser = UserService({ db: testDatabase })
    })
    describe('getUsers', () => {
        it('quieries database', () => {
            const subject = await createUser.getUsers();
            expect(subject.length).to.equal(3)
        })
    })
})