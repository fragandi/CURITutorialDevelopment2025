var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ch-invarianttheory",
  "level": "1",
  "url": "ch-invarianttheory.html",
  "type": "Chapter",
  "number": "1",
  "title": "Invariant Theory",
  "body": " Invariant Theory   This chapter is co-authored by Francesca Gandini, Al Ashir Intisar, and Sumner Strom. In this chapter we will present an overview of the theory behind the algorithms implemented in the InvariantRing software package in the open-source Computer Algebra System Macaulay2 (M2) .  You can access an online version of this chapter with live code cell at . There you can also learn how to set up a virtual machine on Github with Codespaces so that you write and run M2 code from anywhere. A turn-key repository for creating a Codespace for Macaulay2 is available at fragandi\/M2-codespace .  We also include some background on orbit sums necessary to implement an algorithm to compute invariants for permutations actions. We have worked with a group of collaborators on the first version of the code for this algorithm at the Macaulay2 Workshop at Tulane University in April 2025 and plan to further test it and release it with Macaulay2 in Fall 2025.  We finish the chapter with a selection of examples that illustrate the current capabilities of the InvariantRing package. You can run the provided code in your local installation of M2 or go to the online version and execute the code cells on your browser. This works well even on mobile devices!    A concrete introduction to invariant rings    Finite Matrix Groups  We can think of a (linear) action of a group on a vector space concretely by interpreting each group element as a matrix and describing the action as matrix multiplication on vectors. We can then evaluate any polynomial on a vector and its image after the action.   Consider and the vector This gives . Thus for the polynomial and we have, .   More formally, for a finite group we will consider a linear representation of via its action on a finite dimensional vector space over a field of characteristics zero. In general, most of the results in this chapter hold in the non-modular case i.e., when the characteristics of the field does not divide the order of the group. As of now finite fields are not fully supported by the current version of the InvariantRing package and such functionalities is an active area of development.  If is faithful representation of of dimension , the image of the representation is isomorphic to and so we consider as a finite matrix group .  Suppose and , then is a finite matrix group.   Let us consider a two-dimesional representation of , the cyclic group of order 2.      Invariant Rings  We will work with a polynomial ring in variables over the field . We use the notation and abuse it by saying and for .   Let be a finite matrix group within . We say that is invariant under the action of if and only if for all .   The polynomials and in are invariant under the action of However the polynoial is not.   We can consider the set of all invariant polynomials under some action of a group . A good exercise is to prove that this set has the structure of a ring.  Let . We define to be the invariant ring for the action of on .    Reynolds Operator  We have that the invariant ring is a subring of the ring . However, it is not an ordinary subring. In characteristic zero, we have a projection from to that respects the action of . The idea: \"averaging\" over the action of we get an invariant polynomial.   The averaging (or Reynolds) map is given by     Example for the Group action . Consider the polynomial , which is not invariant under the action of . We have that: and we can check that is indeed invariant.      Degree bounds and algorithms   Our goal is to find algorithms that provide us with a description of all possible invariants in an efficient way. Formally, we look for minimal generators for the ring of invariants and more precisely for minimal algebra generators for as an algebra over the coefficient field .  For our search to be successful, we need to hope that there are finitely many generators. In our setup (finite groups and characteristic zero) a consequence of Hilbert's Basis Theorem is that our invariant rings are finitely generated. However, we will run in computational troubles if we do not have a stopping point for our search. The most effective way is to provide a bound the degrees of these generators.    Noether Degree Bound  A beautiful theorem of Noether establishes that we have a bound on the degree of a minimal generator independent from the action itself, but just in terms of the order of the group. Moreover, we only need to look at images of monomials under the Reynolds operator.  (Noether):    (Noether Degree Bound) The ring of invariants is generated in degrees .   Noether's result is a constructive one and provides us with a first computational strategy! We can apply to all the finitely many monomials in degrees to get generators for . As the number of monomials grows exponentially with the number of variables and the degree, this is more of a theoretical algorithm, but it does tell us that our goal is at least possible!    Hilbert Ideal  To describe a more sophisticated approach to the search for minimal algebra generators for an invariant ring, we will actually need to consider an ideal instead! Note: for any , the ideal generatd by and the subalgebra generated by over are very different objects.   Let be the ideal in generated by all positive degree invariants. We call the Hilbert Ideal for this action of .   Let be the Hilbert ideal in for the action of . If and every is invariant so , then   Note that the condition that every generator is invariant is not hard to satisfy as if you have a generator that is not invariant, then you can apply the Reynolds operator to obtain a new generator that is. You can now replace the old generator with this new one and still get the same ideal. What is special here is that a set of ideal generators work as algebra generators! Computationally, algebra generators are much harder to find as there is no guarantee to have finitely many of them. However, the Hilbert Basis Theorem tells us that every ideal is finitely generated.    Presentations  When we say that are minimal generators for a subring , we do not exclude the possibility that there is some relation, some polynomial identity, that they satisfy as elements in the bigger ring . We can describe the relations between the generators via a presentation of the subring.   Let . A presentation of is a map, such that . We call the elements of the presentation ideal the syzygies of 's.   Algorithms for finding generators for ideals have been intensely studied and especially in relation with the theory of Groebener bases. We cannot go in the details of these tools, but what is of notice is that they are implemented in Macaulay2 and so we can rely on them in our implementation. In particular, these methods are particularly effective in solving problems in Elimnination Theory. Often the goal is to compute an ideal of relations hoping that this is less complicated than the original structure, possibly elimnating some variables.  (Elimination Theory): In consider the ideal, Then,   Compute a Groebner Basis for with elimination order for the 's. Then, is the Groebner Basis for     Graph of Linear Actions  We can use Elimination Theory to solve our original problem of finding minimal generators for the ring of invariants. We first need to construct a geometric description of the action of a group .   Let be a finite matrix group in . For consider, Then is the subspace arrangement associated to the action of G.  Note that is a linear subspace. So , the set of polynomials vanishing on , is an ideal generated by linear polynomials, we call this a linear ideal .   Consider      Subspace Arrangement Approach  The finite union of the subspaces , denoted is a subspace arrangement, called the group action arrangement . Via Elimination Theory, we can use the vanishing ideal of to recover the Hilbert Ideal.  (Derksen): Let Then    Recent work has shown that the same approach works in the exterior algebra.   (Gandini) Let . Then    The exterior algebra approach has computational potential. Whilst Derken's approach leads to an algorithm with a long run time, first experiments suggest that a fast algorithm could be implemented for skew polynomials. We aim to pursue this line of inquiry in the near future.     Specialized algorithms   For some specific types of actions we have faster and simpler algorithms to find invariants.    Abelian Groups and Weight Matrices  Every abelian group can be written in its invariant factors decomposition as for some unique such that where . In multiplicative notation, A diagonal action of on is given by for a primitive root of unity. We can encod the action in the weight matrix where the rows are indexed by the generators of and the columns are indexed by the variables of .  A monomial is invariant under the action of if an only if its exponent vector is in the kernel of the weigtht matrix . In symbols, where the entry in position is computed modulo .   Interpreting each row has the weight of the action of the generator , we have that acts trivially on the monomial precisely when so modulo as is a primitve root of unity.  We can use this result computationally. As the action is diagonal, the invariant ring is generated by monomials. By Noether Degree Bound we only need to examine all monomials of degree less than the order of the group . Then, by the theorem above, if we can sort the monomials in terms of their weigtht , then the monomials with weight will be invariant.    Permutation actions  The symmetric group acts naturally on by permuting its elements. This action allows us to define a representation where on the basis vectors , the permutation acts by . As acts on by permuting its basis vectors, we have that is a permutation representation induced by the permutation action of .   Consider the group . The matrix for the action of is given by and then we have it acting on a vector by matrix multiplication,    Now consider the action of the symmetric group on the polynomial ring . The symmetric polynomials are the invariant polynomials under this action..    We call , a symmetric polynomial if for all permutations of .    An example of symmetric polynomials is given by the elementary symmetric polynomials .    The elementary symmetric polynomials in are defined by with .    More generally, we can consider a permutation action by some subgroup of . For any monomial in , we can consider its orbit under the action of .    The of any element is .    Any permutation in acts on the orbit by rearranging its elements. As a result, the orbit sums will give us invariant polynomials.    The orbit sum of the sum of over the elements of .    We can find a set of minimal invariants by computing all orbit sums of all monomials of degree . But this is computationally expensive and will lead to a lot of redundant computations. Instead, we will use a result that tells us that we only need to compute the orbit sums of some special monomials. Consider the exponent sequence of a monomial and rearrange it to obtain an integer partition , where     We call a monomial special if the entries in its associated partition decrease by at most one at each step and the last entry is 0.    The definition of special depends on the number of variables or the number of parts in the integer partition. So would not be special within , but it is special in .    (Göbel) Let be a permutation representation of a finite group acting on . Then the ring of invariants is generated as an algebra by the top elementary symmetric function and the orbit sum of the special monomials.      (Göbel's Bound) In a permutation representation of dimension at least 3, the degree of a minimal generating invariant is at most .    We have that the bound follows from the theorem as the degree of a special momial is at most and this is larger than , the degree of , when .  To show that orbits of special monomial generate the ring of invariants, one needs to consider a reduction argument. If you start with a non-special monomial, the entries of its partition are not decreasing by at most 1 and we call the first place where there is a jump a in the partition. Starting from a non-special monomial we can obtain a reduced monomial by decreasing all the largest exponents up to the gap by one. The reduced monomial will be closer to being special as the gap itself will be reduced by 1.  In the ring we have the non-special monomial . The gap occurs at the second entry of the partition so the reduction would give us and produced a special monomial.  Algorithmically, we can reduce any monomial to a special one by reducing the upper degrees repeatedly until the monomial is special. So the general idea of the proof of Gobel's theorem is to show that the orbit sum of any monomial can be rewritten as a sum of orbit sums of special monomials or special monomials times some power of . In our ongoing work we are using Gobel's theorem as a tool for reducing the complexity of computing invariants for permutation actions.     InvariantRings package   We conclude with references to the algorithms implemented in the InvariantRing package and examples of its implementation. Version 2.0 of this package was accepted for publication in volume 14 of Journal of Software for Algebra and Geometry on 2023-09-14, in the article The InvariantRing package for Macaulay2 (DOI: 10.2140\/jsag.2024.14.5). That version can be obtained from the journal or from the Macaulay2 source code repository.    References for the implemented algorithms    An elimination theory algorithm that computes the Hilbert ideal for any linearly reductive group: Derksen, H. and Kemper, G. (2015). Computational Invariant Theory. Heidelberg: Springer. Algorithm 4.1.9, pp 159-164    A simple and efficient algorithm for invariants of tori based on: Derksen, H. and Kemper, G. (2015). Computational Invariant Theory. Heidelberg: Springer. Algorithm 4.3.1 pp 174-177    An adaptation of the tori algorithm for invariants of finite abelian groups based on: Gandini, F. Ideals of Subspace Arrangements. Thesis (Ph.D.)-University of Michigan. 2019. ISBN: 978-1392-76291-2. pp 29-34.    King's algorithm and the linear algebra method for invariants of finite groups: Derksen, H. and Kemper, G. (2015). Computational Invariant Theory. Heidelberg: Springer. Algorithm 3.8.2, pp 107-109; pp 72-74    The algorithms for primary and secondary invariants, and Molien series of finite groups implemented in version 1.1.0 of this package by: Hawes, T. Computing the invariant ring of a finite group. JSAG, Vol. 5 (2013). pp 15-19. DOI: 10.2140\/jsag.2013.5.15    The orbit sum approach is under development and will be released with version 3.0 of the package. Our implementation is following the description by Mara D. Neusel, in her book Invariant Theory from the AMS The Student Mathematical Library (2007, Volume 36), DOI:     InvariantRing Library Demos  The InvariantRing package in Macaulay2 provides tools to study and compute invariant rings of group actions. To get started, install the package.    Special Linear Group Actions on two variables  A classical example: the standard action of on . The ring R carries a linearly reductive action defined via the matrix SL2std . The invariants and Hilbert ideal are then computed.     Diagonal Actions of Abelian Groups  This example demonstrates a diagonal action of the abelian group on a polynomial ring. After defining the diagonal weights, we compute the invariant ring and its Hilbert series.     Linearly Reductive Actions: Permutations and Binary Forms  Here's how the symmetric group acts via a matrix of projection operators. We identify which polynomials are invariant under the group action.   Now we compute the invariants of binary quadratics and quartics using actions. These involve basis substitutions in a ring of forms and are more computationally demanding.      Matrix Invariants and Conjugation Actions  We define SL₂ actions on 2 2 and 3 3 matrices of binary or ternary forms. The conjugation action creates sophisticated invariants under change of basis.   The same process is repeated for 3 3 matrices. This involves 9-dimensional vector spaces and is more computationally demanding.     Finite Group Actions  Finally, we examine the symmetric group acting on 4 variables. The current version of the package can use both King's algorithm and a slower linear algebra method to compute primary and secondary invariants. Future methods using Gobel's theorem should improve on the speed of this computation.      "
},
{
  "id": "subsec-finite-matrix-groups-3",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-finite-matrix-groups-3",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": " Consider and the vector This gives . Thus for the polynomial and we have, .  "
},
{
  "id": "subsec-finite-matrix-groups-5",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-finite-matrix-groups-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix group "
},
{
  "id": "subsec-finite-matrix-groups-6",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-finite-matrix-groups-6",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "Suppose and , then is a finite matrix group. "
},
{
  "id": "subsec-finite-matrix-groups-7",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-finite-matrix-groups-7",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": " Let us consider a two-dimesional representation of , the cyclic group of order 2.   "
},
{
  "id": "subsec-invariant-rings-3",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-invariant-rings-3",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": " Let be a finite matrix group within . We say that is invariant under the action of if and only if for all . "
},
{
  "id": "subsec-invariant-rings-4",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-invariant-rings-4",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": " The polynomials and in are invariant under the action of However the polynoial is not.  "
},
{
  "id": "subsec-invariant-rings-6",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-invariant-rings-6",
  "type": "Definition",
  "number": "1.1.6",
  "title": "",
  "body": "Let . We define to be the invariant ring for the action of on . "
},
{
  "id": "subsec-reynolds-operator-2",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-reynolds-operator-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projection "
},
{
  "id": "subsec-reynolds-operator-3",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-reynolds-operator-3",
  "type": "Definition",
  "number": "1.1.7",
  "title": "",
  "body": " The averaging (or Reynolds) map is given by   "
},
{
  "id": "subsec-reynolds-operator-4",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-reynolds-operator-4",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": " Example for the Group action . Consider the polynomial , which is not invariant under the action of . We have that: and we can check that is indeed invariant.  "
},
{
  "id": "sec-degree-bounds-algorithms-2-1",
  "level": "2",
  "url": "ch-invarianttheory.html#sec-degree-bounds-algorithms-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minimal generators "
},
{
  "id": "subsec-noether-degree-bound-3",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-noether-degree-bound-3",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "",
  "body": "(Noether):  "
},
{
  "id": "subsec-noether-degree-bound-4",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-noether-degree-bound-4",
  "type": "Corollary",
  "number": "1.2.2",
  "title": "",
  "body": " (Noether Degree Bound) The ring of invariants is generated in degrees .  "
},
{
  "id": "subsec-hilbert-ideal-3",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-hilbert-ideal-3",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": " Let be the ideal in generated by all positive degree invariants. We call the Hilbert Ideal for this action of .  "
},
{
  "id": "subsec-hilbert-ideal-4",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-hilbert-ideal-4",
  "type": "Theorem",
  "number": "1.2.4",
  "title": "",
  "body": "Let be the Hilbert ideal in for the action of . If and every is invariant so , then  "
},
{
  "id": "subsec-presentations-2",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-presentations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "presentation "
},
{
  "id": "subsec-presentations-3",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-presentations-3",
  "type": "Definition",
  "number": "1.2.5",
  "title": "",
  "body": " Let . A presentation of is a map, such that . We call the elements of the presentation ideal the syzygies of 's.  "
},
{
  "id": "subsec-presentations-5",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-presentations-5",
  "type": "Proposition",
  "number": "1.2.6",
  "title": "",
  "body": "(Elimination Theory): In consider the ideal, Then,  "
},
{
  "id": "subsec-presentations-6",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-presentations-6",
  "type": "Algorithm",
  "number": "1.2.7",
  "title": "",
  "body": "Compute a Groebner Basis for with elimination order for the 's. Then, is the Groebner Basis for  "
},
{
  "id": "subsec-graph-of-linear-actions-3",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-graph-of-linear-actions-3",
  "type": "Definition",
  "number": "1.2.8",
  "title": "",
  "body": " Let be a finite matrix group in . For consider, Then is the subspace arrangement associated to the action of G. "
},
{
  "id": "subsec-graph-of-linear-actions-4",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-graph-of-linear-actions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear ideal "
},
{
  "id": "subsec-graph-of-linear-actions-5",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-graph-of-linear-actions-5",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": " Consider   "
},
{
  "id": "subsec-subspace-arrangement-approach-2",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-subspace-arrangement-approach-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "group action arrangement "
},
{
  "id": "subsec-subspace-arrangement-approach-3",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-subspace-arrangement-approach-3",
  "type": "Theorem",
  "number": "1.2.10",
  "title": "",
  "body": "(Derksen): Let Then   "
},
{
  "id": "subsec-subspace-arrangement-approach-5-1",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-subspace-arrangement-approach-5-1",
  "type": "Theorem",
  "number": "1.2.11",
  "title": "",
  "body": "(Gandini) Let . Then  "
},
{
  "id": "subsec-AGWM-3",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-AGWM-3",
  "type": "Theorem",
  "number": "1.3.1",
  "title": "",
  "body": "A monomial is invariant under the action of if an only if its exponent vector is in the kernel of the weigtht matrix . In symbols, where the entry in position is computed modulo .  "
},
{
  "id": "subsec-orbitsums-3",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-orbitsums-3",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": " Consider the group . The matrix for the action of is given by and then we have it acting on a vector by matrix multiplication,   "
},
{
  "id": "def-symmetricpolynomial",
  "level": "2",
  "url": "ch-invarianttheory.html#def-symmetricpolynomial",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": "  We call , a symmetric polynomial if for all permutations of .   "
},
{
  "id": "subsec-orbitsums-6",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-orbitsums-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary symmetric polynomials "
},
{
  "id": "def-elemsymm",
  "level": "2",
  "url": "ch-invarianttheory.html#def-elemsymm",
  "type": "Definition",
  "number": "1.3.4",
  "title": "",
  "body": "  The elementary symmetric polynomials in are defined by with .   "
},
{
  "id": "def-orbit",
  "level": "2",
  "url": "ch-invarianttheory.html#def-orbit",
  "type": "Definition",
  "number": "1.3.5",
  "title": "",
  "body": "  The of any element is .   "
},
{
  "id": "def-orbitsum",
  "level": "2",
  "url": "ch-invarianttheory.html#def-orbitsum",
  "type": "Definition",
  "number": "1.3.6",
  "title": "",
  "body": "  The orbit sum of the sum of over the elements of .   "
},
{
  "id": "def-specialmonomials",
  "level": "2",
  "url": "ch-invarianttheory.html#def-specialmonomials",
  "type": "Definition",
  "number": "1.3.7",
  "title": "",
  "body": "  We call a monomial special if the entries in its associated partition decrease by at most one at each step and the last entry is 0.   "
},
{
  "id": "thm-gobel",
  "level": "2",
  "url": "ch-invarianttheory.html#thm-gobel",
  "type": "Theorem",
  "number": "1.3.8",
  "title": "",
  "body": "  (Göbel) Let be a permutation representation of a finite group acting on . Then the ring of invariants is generated as an algebra by the top elementary symmetric function and the orbit sum of the special monomials.   "
},
{
  "id": "cor-gobel",
  "level": "2",
  "url": "ch-invarianttheory.html#cor-gobel",
  "type": "Corollary",
  "number": "1.3.9",
  "title": "",
  "body": "  (Göbel's Bound) In a permutation representation of dimension at least 3, the degree of a minimal generating invariant is at most .   "
},
{
  "id": "subsec-orbitsums-19",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-orbitsums-19",
  "type": "Example",
  "number": "1.3.10",
  "title": "",
  "body": "In the ring we have the non-special monomial . The gap occurs at the second entry of the partition so the reduction would give us and produced a special monomial. "
},
{
  "id": "sec-invariantring-demos-4",
  "level": "2",
  "url": "ch-invarianttheory.html#sec-invariantring-demos-4",
  "type": "Example",
  "number": "1.4.1",
  "title": "Special Linear Group Actions on two variables.",
  "body": " Special Linear Group Actions on two variables  A classical example: the standard action of on . The ring R carries a linearly reductive action defined via the matrix SL2std . The invariants and Hilbert ideal are then computed.   "
},
{
  "id": "sec-invariantring-demos-5",
  "level": "2",
  "url": "ch-invarianttheory.html#sec-invariantring-demos-5",
  "type": "Example",
  "number": "1.4.2",
  "title": "Diagonal Actions of Abelian Groups.",
  "body": " Diagonal Actions of Abelian Groups  This example demonstrates a diagonal action of the abelian group on a polynomial ring. After defining the diagonal weights, we compute the invariant ring and its Hilbert series.   "
},
{
  "id": "sec-invariantring-demos-6",
  "level": "2",
  "url": "ch-invarianttheory.html#sec-invariantring-demos-6",
  "type": "Example",
  "number": "1.4.3",
  "title": "Linearly Reductive Actions: Permutations and Binary Forms.",
  "body": " Linearly Reductive Actions: Permutations and Binary Forms  Here's how the symmetric group acts via a matrix of projection operators. We identify which polynomials are invariant under the group action.   Now we compute the invariants of binary quadratics and quartics using actions. These involve basis substitutions in a ring of forms and are more computationally demanding.    "
},
{
  "id": "sec-invariantring-demos-7",
  "level": "2",
  "url": "ch-invarianttheory.html#sec-invariantring-demos-7",
  "type": "Example",
  "number": "1.4.4",
  "title": "Matrix Invariants and Conjugation Actions.",
  "body": " Matrix Invariants and Conjugation Actions  We define SL₂ actions on 2 2 and 3 3 matrices of binary or ternary forms. The conjugation action creates sophisticated invariants under change of basis.   The same process is repeated for 3 3 matrices. This involves 9-dimensional vector spaces and is more computationally demanding.   "
},
{
  "id": "sec-invariantring-demos-8",
  "level": "2",
  "url": "ch-invarianttheory.html#sec-invariantring-demos-8",
  "type": "Example",
  "number": "1.4.5",
  "title": "Finite Group Actions.",
  "body": " Finite Group Actions  Finally, we examine the symmetric group acting on 4 variables. The current version of the package can use both King's algorithm and a slower linear algebra method to compute primary and secondary invariants. Future methods using Gobel's theorem should improve on the speed of this computation.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
